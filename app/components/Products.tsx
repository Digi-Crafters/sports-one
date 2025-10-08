"use client";
import React, { useState, useEffect } from "react";
import data from "../data/products.json";
import Image from "next/image";
import Link from "next/link";

const categoryImages = {
  "cricket-bats":
    "https://images.unsplash.com/photo-1625246861784-31bdbfca171e?auto=format&fit=crop&w=1200&q=80",
  "protective-gear":
    "https://images.unsplash.com/photo-1626942042652-b23c3cba4dbf?auto=format&fit=crop&w=1200&q=80",
  "cricket-balls":
    "https://images.unsplash.com/photo-1625836103401-9c3b4608e70b?auto=format&fit=crop&w=1200&q=80",
  apparel:
    "https://images.unsplash.com/photo-1579942982534-8cf59bbd2d4d?auto=format&fit=crop&w=1200&q=80",
  accessories:
    "https://images.unsplash.com/photo-1517341741950-3017eb77b9f7?auto=format&fit=crop&w=1200&q=80",
};

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const productsPerPage = 6;

  const categories = [
    { id: "all", name: "All Products" },
    { id: "cricket-bats", name: "Cricket Bats" },
    { id: "protective-gear", name: "Protective Gear" },
    { id: "cricket-balls", name: "Cricket Balls" },
    { id: "apparel", name: "Apparel" },
    { id: "accessories", name: "Accessories" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? data.products
      : data.products.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  useEffect(() => setCurrentPage(1), [selectedCategory]);

  const formatPrice = (price:number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);

  const getCategoryName = (id:string) =>
    categories.find((c) => c.id === id)?.name || id;

  return (
    <section id="products" className="py-16 sm:py-20 bg-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            PREMIUM QUALITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Cricket <span className="text-emerald-600">Equipment</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our curated selection of world-class cricket gear designed for comfort, control, and performance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:overflow-visible sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all border whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <Link href={`/products/${product.id}`}>
              {/* Image Section */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={product?.images?.[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={400}
                  height={300}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      FEATURED
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      -{product.discount}%
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-2 text-xs sm:text-sm text-gray-500">
                  <span>{getCategoryName(product.category)}</span>
                  <span>{product.brand}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-emerald-600 transition">
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-4 h-8 sm:h-10">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-semibold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-gray-400 line-through text-xs sm:text-sm">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      product.inStock
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredProducts.length > productsPerPage && (
          <div className="flex justify-center items-center gap-2 sm:gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
              aria-label="Previous page"
            >
              Previous
            </button>

            <div className="flex space-x-1 sm:space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs sm:text-sm font-semibold transition ${
                    currentPage === i + 1
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                  }`}
                  aria-label={`Page ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}

        {/* Empty State */}
        {currentProducts.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <div className="text-5xl sm:text-6xl mb-4">🏏</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-500 mb-6">
              Try selecting a different category or check back later.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
