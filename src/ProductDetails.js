import Product from './Product';
import Container from '@mui/material/Container';
import { prodotti } from './prodotti';

export default function ProductDetails(props) {
    return(
        <div>
            <Container maxWidth="xl">
                <br/>
                <Product prod={prodotti.find(prod=>prod.UPC==props.match.params.prodId)} det={true} />
            </Container>
        </div>
    )
}