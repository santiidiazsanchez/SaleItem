import { title, subtitle } from "@/components/primitives";
import AccordionCategories from "@/components/accordionCategories";
import CheckboxBrands from "@/components/checkboxBrands";
import ProductGrid from "@/components/productGrid";
import RadioColor from "@/components/radioColor";
import Feature from "@/components/feature";

import { Pagination } from "@nextui-org/pagination";
import { Divider } from "@nextui-org/divider";

export default function ShopPage() {
	return (
		<>
			<article className="hidden md:block md:col-span-4 lg:col-span-3">
				<h1 className={subtitle() + " mb-5"}>
					Categories:
				</h1>
				<AccordionCategories />
				<Divider className="my-4" />
				<h1 className={subtitle() + " mb-5"}>
					Brands:
				</h1>
				<CheckboxBrands />
				<Divider className="my-4" />
				<h1 className={subtitle() + " mb-5"}>
					Color:
				</h1>
				<RadioColor />
			</article>

			<article className="col-span-12 md:col-span-8 lg:col-span-9">
				<h1 className={title()}>
					Gadgets and Gear
				</h1>
				<p className="my-5">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, asperiores.
				</p>

				<ProductGrid />

				<div className="flex justify-center">
					<Pagination
						total={10}
						initialPage={1}
						className="my-10"
						color="warning"
					/>
				</div>
			</article>

			<article className="md:hidden block col-span-12">
				<h1 className={subtitle() + " mb-5"}>
					Categories:
				</h1>
				<AccordionCategories />
				<Divider className="my-4" />
				<h1 className={subtitle() + " mb-5"}>
					Brands:
				</h1>
				<CheckboxBrands />
				<Divider className="my-4" />
				<h1 className={subtitle() + " mb-5"}>
					Color:
				</h1>
				<RadioColor />
			</article>

			<article className="col-span-12">
				<Feature />
			</article>

		</>
	);
}
