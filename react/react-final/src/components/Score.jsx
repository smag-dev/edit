import { useRef } from "react";
const stars = [1,2,3,4,5];

const Score = ({score}) => {
    let score2 = Math.round(score);
    return(
        <>
        {
            stars.map((star, index) => {
                return (
                    <i key={index} className={index <= (score2-1) ? "icn-star primary" : "icn-star"}></i>
                );
            })
        }
        <span>{score} of {stars.length}</span>
        </>
    )
}

export default Score