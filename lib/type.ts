export interface OrderObj {
    id: string;
    foodItems: Food[];
    totalPrice: number;
    status: string;
    customerDetails: {
        name: string;
        email: string;
        address: string;
        phone: string;
    }
}

export interface Food {
    _id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
    quantity?: string;
}