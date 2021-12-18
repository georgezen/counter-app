import React from "react";
import { render } from "@testing-library/react";
import  {PrimerApp} from "../PrimerApp";

describe('Pruebas sobre componente PrimerApp', () => {
    test('debe mostrar el mensaje "2"', () => {
        const value = "2";
        const {getByText} = render(<PrimerApp cadena={value} />);
        expect(getByText(value)).toBeInTheDocument();
    });
});