import React from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from 'antd';

import Table from '../common/Table';
import { PRODUCT_TABLE_COLUMNS } from '../../constants';
import { convertToTableFormat } from '../../helpers/parsers';
import './styles.less';

const { Search } = Input;
class ProductsList extends React.Component {
    componentDidMount() {
        this.props.getProductList();
    }

    filterList = event => {
        this.props.filterList(event.target.value.toLowerCase());
    };

    handleRedirect = productKey => {
        const { history } = this.props;

        history.push(`/product/card/${productKey}/`);
    };

    render() {
        const { productsList } = this.props;
        return (
            <div className="products-list">
                <div className="form">
                    <Search
                        className="form__search"
                        placeholder="filter product"
                        onChange={this.filterList}
                    />
                    <Button className="form__button" type="primary">
                        <Link to="/product/create/">Create New</Link>
                    </Button>
                </div>
                <Table
                    data={convertToTableFormat(productsList)}
                    handleRedirect={this.handleRedirect}
                    columns={PRODUCT_TABLE_COLUMNS}
                />
            </div>
        );
    }
}

export default ProductsList;
