/**
 * @author Yumeng Li
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import {fireEvent, render} from '@testing-library/react';
 import '@testing-library/jest-dom/extend-expect';
 import Popup from "../../components/practice/Popup";
 
 describe("Popup test", () => {
     describe("Component", () => {
         it("no input arguments", () => {
             const div = document.createElement('div');
             ReactDOM.render(<Popup/>, div);
           });
         it("testing text", () => {
             const {getByText} = render(
                 <Popup 
                         trigger = {true}
                        children = 'this is a test'
                        >
                   {/* <div>this is a test</div> */}
                 </Popup>)
               expect(getByText('this is a test')).toBeInTheDocument();
         });
     });
 });