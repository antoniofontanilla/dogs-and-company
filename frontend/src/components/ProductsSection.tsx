import React from 'react';
import { CheckCircle2, ShoppingBag, Tag } from 'lucide-react';
import { Product } from '../types';

interface ProductsSectionProps {
  products: Product[];
  onAddProductInquiry: (product: Product) => void;
  inquiryProductIds: string[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onAddProductInquiry,
  inquiryProductIds,
}) => {
  return (
    <section id="productos" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wider uppercase mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
            <span>Boutique & Farmacia Canina</span>
          </div>
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Productos en Venta & Cuidado
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Antiparasitarios recomendados por veterinarios, accesorios ergonómicos y cosmética natural de grado profesional.
          </p>
        </div>

        {/* Visual Grid of Product Cards */}
        <div
          id="products-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {products.map((product) => {
            const isAdded = inquiryProductIds.includes(product.id);

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col hover:border-amber-400 hover:shadow-lg hover:shadow-stone-200/60 transition-all duration-300"
              >
                {/* Product Photo */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-100 p-4 flex items-center justify-center">
                  <img
                    id={product.imageId}
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />

                  {/* Stock Availability Badge */}
                  <div
                    id={`product-stock-${product.id}`}
                    className="absolute top-6 right-6 inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{product.stockStatus}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Brand / Category */}
                    <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-1.5">
                      <span
                        id={`product-category-${product.id}`}
                        className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md"
                      >
                        <Tag className="w-3 h-3" />
                        {product.category}
                      </span>
                      <span id={`product-brand-${product.id}`} className="font-semibold text-stone-600">
                        {product.brand}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      id={`product-name-${product.id}`}
                      className="text-base font-bold text-stone-900 leading-snug line-clamp-2 mt-2"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-stone-600 font-bold block">
                        Precio
                      </span>
                      <span
                        id={`product-price-${product.id}`}
                        className="text-xl font-extrabold text-stone-900"
                      >
                        {product.price}
                      </span>
                    </div>

                    {/* Only 1 button per card: "Consultar / Añadir" */}
                    <button
                      id={`btn-product-${product.id}`}
                      onClick={() => onAddProductInquiry(product)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                          : 'bg-stone-900 hover:bg-amber-600 text-white shadow-sm'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                          <span>Añadido</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 text-amber-400" />
                          <span>Consultar / Añadir</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
