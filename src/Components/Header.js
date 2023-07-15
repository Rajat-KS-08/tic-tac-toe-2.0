import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import {GrReactjs} from "react-icons/gr";

const Header = () => {

    return (
        <header className='d-flex justify-content-center headBody breadcrumb bg-primary rounded-bottom'>
            <div className='d-flex align-items-center'>
                <h1 className='display-6'>
                <GrReactjs />
                Tic Tac Toe
                <GrReactjs />
                </h1>
                
            </div>
        </header>
    );
}

export default Header;