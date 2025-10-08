"use client";
import React, { useState } from "react";
import data from "../../data/products.json";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
// Types
interface ProductSpecifications {
  weight?: string;
  grade?: string;
  profile?: string;
  sweetSpot?: string;
  handle?: string;
  grip?: string;
  sizes?: string[];
  protection?: string;
  material?: string;
  closure?: string;
  straps?: string;
  certification?: string;
  grill?: string;
  size?: string;
  seam?: string;
  quality?: string;
  capacity?: string;
  compartments?: string;
  care?: string;
  length?: string;
  colors?: string[];
}

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  discount: number;
  brand: string;
  images: string[];
  description: string;
  features: string[];
  specifications: ProductSpecifications;
  inStock: boolean;
  stockQuantity: number;
  isFeatured: boolean;
  isNew: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

interface ProductPageProps {
  productId?: string;
}

const ProductDetailPage: React.FC<ProductPageProps> = ({ productId }) => {
  const { id } = useParams();
  const resolvedProductId = productId ?? id;
  // Mock data
  const products: Product[] = data.products;
  const product =
    products.find(
      (p) => p.id === parseInt(resolvedProductId?.toString() ?? "")
    ) || products[0];

  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment" && quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-fill)"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-300"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl py-2 sm:py-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap py-1">
            <Link href="/" className="hover:text-emerald-600 cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="hover:text-emerald-600 cursor-pointer capitalize">
              {product.category.replace("-", " ")}
            </span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl py-4 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12">
          {/* Image Gallery */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-50 rounded-lg sm:rounded-2xl overflow-hidden border border-gray-200">
              <Image
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain p-2 sm:p-8"
                width={600}
                height={600}
              />
              {product.isNew && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  NEW
                </div>
              )}
              {product.discount > 0 && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  -{product.discount}%
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-3 gap-1 sm:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square bg-gray-50 rounded-md sm:rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === image
                      ? "border-emerald-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain p-1 sm:p-4"
                    width={100}
                    height={100}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Brand */}
            <div className="inline-block bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {product.brand}
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 break-words">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <div className="flex items-center space-x-0.5 sm:space-x-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-xs sm:text-base text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
              <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-base sm:text-xl md:text-2xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {product.inStock ? (
                <>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs sm:text-base text-emerald-600 font-medium">
                    In Stock ({product.stockQuantity} available)
                  </span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs sm:text-base text-red-600 font-medium">
                    Out of Stock
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection (if applicable) */}
            {product.specifications.sizes &&
              product.specifications.sizes.length > 0 && (
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-3">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-3">
                    {product.specifications.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-2 py-1 sm:px-6 sm:py-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-base transition-all ${
                          selectedSize === size
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            {/* Quantity */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-3">
                Quantity
              </label>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-md sm:rounded-lg flex items-center justify-center text-gray-900 font-semibold text-base sm:text-lg transition-all"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="text-base sm:text-xl font-semibold text-gray-900 min-w-[1.5rem] sm:min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-md sm:rounded-lg flex items-center justify-center text-gray-900 font-semibold text-base sm:text-lg transition-all"
                  disabled={quantity >= product.stockQuantity}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-2 sm:gap-4 pt-2 sm:pt-4">
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 sm:py-4 px-3 sm:px-8 rounded-md sm:rounded-xl font-semibold text-xs sm:text-base md:text-lg transition-all shadow-sm sm:shadow-md hover:shadow-lg flex items-center justify-center space-x-1 sm:space-x-2">
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Add to Cart</span>
              </button>
              <button className="w-10 h-10 sm:w-auto sm:h-auto bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 sm:py-4 px-2 sm:px-6 rounded-md sm:rounded-xl font-semibold text-xs sm:text-base md:text-lg transition-all flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-3 sm:pt-6">
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">
                Key Features
              </h3>
              <ul className="space-y-1.5 sm:space-y-3">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-1.5 sm:space-x-3 text-xs sm:text-base text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="border-t border-gray-200 pt-3 sm:pt-6">
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4">
                {Object.entries(product.specifications).map(([key, value]) => {
                  if (!value || (Array.isArray(value) && value.length === 0))
                    return null;
                  return (
                    <div
                      key={key}
                      className="bg-gray-50 rounded-md sm:rounded-lg p-2 sm:p-4"
                    >
                      <span className="block text-xs text-gray-600 capitalize mb-0.5 sm:mb-1">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="block text-xs sm:text-base font-semibold text-gray-900 break-words">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
