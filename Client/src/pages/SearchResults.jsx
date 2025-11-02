import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useCart } from '../components/CartProvider';
import '../pages/kids/kids.css'; // Make sure this path is correct

function SearchResults() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get the search query from URL
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query'); // Gets 'blue shirt' from /search?query=blue shirt

    // Fetch products based on search query
    useEffect(() => {
        if (!query) {
            setLoading(false); // If no query, stop loading
            setProducts([]); // Clear any previous results
            return; // Don't fetch
        }

        const fetchSearchResults = async () => {
            try {
                setLoading(true);
                setError(null); // Clear previous errors

                const response = await fetch(`http://localhost:5000/api/products?search=${query}`);
                if (!response.ok) {
                    // If no products are found, the backend might send a 404
                    // Or it might send an empty array. We'll handle both.
                    if (response.status === 404) {
                        setProducts([]);
                        throw new Error('No products found.');
                    } else {
                        throw new Error('Failed to fetch products');
                    }
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                // Don't set an error if it's just 'No products found'
                if (err.message !== 'No products found.') {
                    setError(err.message);
                }
                setProducts([]); // Clear products on error
            } finally {
                setLoading(false);
            }
        };

        // ✅ CORRECTION IS HERE: Call the function *inside* the effect
        fetchSearchResults();

    }, [query]); // Dependency array is correct

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        addToCart(product);
    };

    // Render the search results

    if (loading) return <div className="loading">Searching...</div>
    if (error) return <div className="error">Error: {error}</div>

    return (
        <>
            <div className="p-title">
                <h2>Search Results for: "{query}"</h2>
            </div>

            <div className="kids-container">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                            {/* This link should go to the generic product detail page */}
                            <Link to={`/product/${product._id}`} className="image-wrapper">
                                <img src={product.mainImg} alt={product.name} />
                                <img src={product.hoverImg} alt={`${product.name} hover`} />
                                <button
                                    className="add-to-cart"
                                    onClick={(e) => handleAddToCart(e, product)}
                                >
                                    Add to Cart
                                </button>
                            </Link>
                            <p className="product-name">{product.name}</p>
                            {/* Make sure price exists before calling toFixed */}
                            <p className="product-price">
                                {product.price ? `Rs. ${product.price.toFixed(2)}` : 'Price not available'}
                            </p>
                        </div>
                    ))
                ) : (
                    // Show this message if no products were found (and not loading)
                    <p>No products found matching "{query}".</p>
                )}
            </div>
        </>
    );
}

export default SearchResults;