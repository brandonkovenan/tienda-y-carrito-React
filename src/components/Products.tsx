import './Products.css';
import { AddToCartIcon } from './Icons';

interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: [string];
};

const NoProducts = () => {
	return (
		<p>No hay productos para mostrar</p>
	)
}

export function Products({ products }: any) {
	console.log("🚀 ~ Products ~ products:", products)

	const hasProducts = products.length > 0;


	return (
		<main className="products">
			{
				hasProducts
					? (
						<ul>
							{
								products.map((product: Product) => (
									<li key={product.id}>
										<img src={product.thumbnail} alt={product.thumbnail} />
										<div>
											<strong>{product.title}</strong> - ${product.price}
										</div>
										<div>
											<button>
												<AddToCartIcon />
											</button>
										</div>
									</li>
								))
							}
						</ul>
					)
					: <NoProducts />
			}
		</main>
	)

}