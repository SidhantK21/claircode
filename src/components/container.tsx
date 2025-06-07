import { cn } from "@/libs/utils";
import React from "react";

export const Container=({ children,className,}:{
    children:React.ReactNode;
    className?:string;
})=>{
    return <div className={cn(" w-full bg-white ",className)}>{children}</div>;
};