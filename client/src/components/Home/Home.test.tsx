import HomeContainer from "./Home";
import { render } from '@testing-library/react'

test('renders the HomeContainer Component', () => {
    render(<HomeContainer code={null}/>)
})