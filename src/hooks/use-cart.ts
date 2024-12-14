
import type { CartData } from "@/types";
import { ProductData } from "@arthur.eudeline/starbucks-tp-kit/types";
import {create} from "zustand";

export const useCart = create<CartData>((set)=>({
    lines: []
}))

export function addLine(product: ProductData){
    useCart.setState((state)=>({lines: [...state.lines, {product, qty : 1}] }))
} 