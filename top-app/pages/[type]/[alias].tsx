import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.inteface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/toppage.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/product.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { TopPageComponent } from "../../page-components";
import { API } from "../../helpers/api";
import Head from "next/head";

const firstCategory = 0;

function TopPage({ firstCategory, page, products }: PageProps): JSX.Element {
	return (
		<>
			<Head>
				<title>{page.metaTitle}</title>
				<meta name="description" content={page.metaDescription}></meta>
				<meta property="og:title" content={page.metaTitle}></meta>
				<meta property="og:description" content={page.metaDescription}></meta>
				<meta property="og:type" content="article"></meta>
			</Head>
			<TopPageComponent
				firstCategory={firstCategory}
				page={page}
				products={products}
			></TopPageComponent>
		</>
	);
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];

	for (const m of firstLevelMenu) {
		const { data: menu } = await axios.post<MenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
			{
				firstCategory: m.id,
			},
		);
		paths = paths.concat(menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`)));
	}
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<PageProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true,
		};
	}

	try {
		const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
			firstCategory: firstCategoryItem.id,
		});

		if (menu.length == 0) {
			return {
				notFound: true,
			};
		}

		const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias);
		const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
			category: page.category,
			limit: 10,
		});

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
				page,
				products,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

interface PageProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}
