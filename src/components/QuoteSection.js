import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function QuoteSection(){
    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food is everithing we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region your tribe, your grandma. It's inseparable from those from ther get-go.</p>
            <p className="author">-Anthiny Bourdain</p>
        </div>
    )
}