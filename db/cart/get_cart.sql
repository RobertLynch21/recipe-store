SELECT cart_id FROM carts
WHERE user_id = $1 AND ACTIVE = TRUE;