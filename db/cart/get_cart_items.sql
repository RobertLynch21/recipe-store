SELECT * FROM product_cart_junction pc 
JOIN products p ON pc.product_id = p.product_id
WHERE pc.card_id = $1;