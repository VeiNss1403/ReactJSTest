import React from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";
import * as ProductService from "../../services/ProductService";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { WrapperNavigate } from "../MiniTypeProductPage/style";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const test = useSelector((state) => state);
  const brandProduct = useSelector((state) => state?.product?.brand);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [panigate, setPanigate] = useState({
    page: 0,
    limit: 10,
    total: 1,
  });
  const fetchProductAll = async (search, limit, page) => {
    setLoading(true);
    const res = await ProductService.getAllProduct(search, limit, page);
    if (res?.status === "OK") {
      setLoading(false);
      setProducts(res?.data);
      setPanigate({ ...panigate, total: res?.total });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductAll(searchDebounce, panigate.limit, panigate.page);
  }, [searchDebounce, panigate.limit, panigate.page]);

  const onChange = (current, pageSize) => {
    setPanigate({ ...panigate, page: current - 1, limit: pageSize });
  };

  return (
    <Loading isLoading={loading}>
      <div style={{ width: "100%", background: "#efefef", minHeight: "100vh" }}>
        <div style={{ width: "1300px", margin: "0 auto", height: "100%" }}>
          <WrapperNavigate onClick={() => navigate("/")}>
            Trang chủ
          </WrapperNavigate>
          <WrapperNavigate>
            {" > "}
            Sản phẩm
          </WrapperNavigate>
          <Row
            style={{
              flexWrap: "nowrap",
              paddingTop: "10px",
              height: "calc(100% - 20px)",
            }}
          >
            <WrapperNavbar span={5}>
              <NavBarComponent />
            </WrapperNavbar>
            <Col
              span={19}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <WrapperProducts>
                {products
                  ?.filter((pro) => {
                    const brandMatch =
                      brandProduct.length === 0 ||
                      brandProduct.includes(pro?.brand);

                    const priceFilter =
                      pro?.price >= test?.product?.pricemin &&
                      pro?.price <= test?.product?.pricemax;
                    const ratingFilter = pro?.rating >= test?.product?.rating;
                    return brandMatch && priceFilter && ratingFilter;
                  })
                  .map((product) => {
                    return (
                      <CardComponent
                        key={product._id}
                        countInStock={product.countInStock}
                        description={product.description}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                        type={product.type}
                        selled={product.selled}
                        discount={product.discount}
                        id={product._id}
                      />
                    );
                  })}
              </WrapperProducts>
              <Pagination
                defaultCurrent={panigate.page + 1}
                total={panigate?.total}
                onChange={onChange}
                style={{ textAlign: "center", marginTop: "10px" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Loading>
  );
};
export default ProductPage;
