import React from "react";
import Book from "./Book";

export default function Library() {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfpage={300}/>
            <Book name="처음 만난 AWS" numOfpage={400}/>
            <Book name="처음 만난 리액트" numOfpage={500}/>
        </div>
    );
}