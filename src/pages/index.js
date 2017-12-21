import withRedux from 'next-redux-wrapper'
import Layout from '../components/layout';
import { initStore } from '../redux/configure-store';

const Index = props => (
    <Layout>
        <div>
            <h1>Here you are</h1>
            <style global jsx>{`body { margin: 0; }`}</style>
        </div>
    </Layout>
);

const mapDispatchToProps = dispatch => ({
    dispatch
});

Index.getInitialProps = ({ store, isServer }) => {
    const { dispatch } = store;

    return {
        dispatch,
        isServer
    };
};

export default withRedux(
    initStore,
    state => ({}),
    mapDispatchToProps
)(Index);
