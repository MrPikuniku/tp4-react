"use client";
import { PRODUCTS_CATEGORY_DATA } from "@arthur.eudeline/starbucks-tp-kit/data";
import { Button } from "@arthur.eudeline/starbucks-tp-kit/components/button";
import { ProductCardLayout } from "@arthur.eudeline/starbucks-tp-kit/components/products/product-card-layout";
import { SectionContainer } from "@arthur.eudeline/starbucks-tp-kit/components/section-container";
import { Card, ProductCartLine } from "@arthur.eudeline/starbucks-tp-kit";
const products = PRODUCTS_CATEGORY_DATA[0].products.slice(0, 3);
console.log(products);

export default function DevCartPage() {
    return (
      <SectionContainer
        className="py-36"
        wrapperClassName="flex flex-col lg:flex-row gap-24"
      >
        {/* Produits */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {products.map((product) => (
            <ProductCardLayout
              key={product.id}
              product={product}
              button={<Button variant={"ghost"} fullWidth>Ajouter au panier</Button>}
            />
        ))}
        </section>
        {/* /Produits */}
  
        {/* Panier */}
        <section className="w-full lg:w-1/3 space-y-8">
          <Card>
            <p><b>MON PANIER</b></p>
            
            <ProductCartLine
              onDelete={() => {}}
              onQtyChange={() => {}}
              product={{
                name: 'Iced Latte',
                desc: "L'intensité de notre espresso rencontre la douceur du lait, servi recouvert de glaçons.",
                img: 'https://www.starbucks.fr/sites/starbucks-fr/files/styles/c04_image_text_grid_600x600/public/2023-03/SBX_DEL_1200x1200_Iced_Cafe_Latte.jpg.webp?itok=5d5zLK5Y',
                id: 3,
                slug: 'iced-latte',
                price: 4.93,
                path: 'latte/iced-latte'
              }}
              qty={1}
            />

            <ProductCartLine
              onDelete={() => {}}
              onQtyChange={() => {}}
              product={{
                name: 'Café Latte',
                desc: "L'intensité de notre espresso rencontre la douceur du lait chauffé à la vapeur, le tout recouvert d'une fine couche de mousse de lait.",
                img: 'https://www.starbucks.fr/sites/starbucks-fr/files/styles/c04_image_text_grid_600x600/public/2023-03/SBX_DEL_1200x1200_Latte_OPT2.jpg.webp?itok=u6SiNyqd',
                id: 2,
                slug: 'cafe-latte',
                price: 5.43,
                path: 'latte/cafe-latte'
              }}
              qty={2}
            />

            <div>Total </div> 
            <Button>Commander</Button>

          </Card>
          <Button variant={"outline"} fullWidth>Vider le panier</Button>
        </section>
        {/* /Panier */}
      </SectionContainer>
    );
  }     














