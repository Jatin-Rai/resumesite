import { Sidebar } from '../../components';

const Layout = ({ children }) => {

    return (

        <>
            <Sidebar>
                {children}
            </Sidebar>

        </>

    );
};

export default Layout;
