import React, { useEffect } from 'react'

export default function Destructuring() {
    
    useEffect(() => {
        const [, , animal] = ['Horse', 'Mouse', 'Cat']
        console.log(animal)
        console.log(typeof animal)

        const [first] = ["cooking", "art", "history"]
        console.log(first)
        console.log(typeof first)
    })

    return(
        <>
        <div>Check Console Log</div>
        </>
    )

}