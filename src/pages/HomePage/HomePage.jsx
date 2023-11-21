import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperMiniType,
  WrapperProducts,
  WrapperTypeProduct,
  WrapperTypeProductContent,
} from "./style";
import slider1 from "../../Assets/Images/SliderHomePage/banner-1.webp";
import slider2 from "../../Assets/Images/SliderHomePage/banner-2.webp";
import slider3 from "../../Assets/Images/SliderHomePage/banner-3.webp";
import slider4 from "../../Assets/Images/SliderHomePage/banner-4.webp";
import slider5 from "../../Assets/Images/SliderHomePage/banner-5.webp";
import image1 from "../../Assets/Images/SliderHomePage/Heposal-600X336-1.webp";
import image2 from "../../Assets/Images/SliderHomePage/tang-can-tamino.webp";
import image3 from "../../Assets/Images/SliderHomePage/vivitaquangcao.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [loading, setLoading] = useState(false);
  const [LoadingMiniType, setLoadingMiniType] = useState(false);
  const [limit, setLimit] = useState(6);
  const [typeProducts, setTypeProducts] = useState([]);
  const [typeMiniProducts, setTypeMiniProducts] = useState([]);
  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ProductService.getAllProduct(search, limit);

    return res;
  };

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };
  const fetchAllMiniTypeProduct = async (type) => {
    setLoadingMiniType(true);
    const res = await ProductService.getAllMiniTypeProduct(type);
    if (res?.status === "OK") {
      setTypeMiniProducts(res?.data);
    }
    setLoadingMiniType(false);
  };
  const {
    isLoading,
    data: products,
    isPreviousData,
  } = useQuery(["products", limit, searchDebounce], fetchProductAll, {
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  useEffect(() => {
    fetchAllTypeProduct();
    fetchAllMiniTypeProduct();
  }, []);
  const navigate = useNavigate();
  const handleNavigatetype = (miniType) => {
    navigate(
      `/product/miniType/${miniType
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        ?.replace(/ /g, "_")}`,
      { state: miniType }
    );
  };
  const content = (
    <Loading isLoading={LoadingMiniType}>
      <div>
        {typeMiniProducts.map((item) => {
          return <WrapperMiniType onClick={() => handleNavigatetype(item)}>{item}</WrapperMiniType>;
        })}
      </div>
    </Loading>
  );

  return (
    <Loading isLoading={isLoading || loading}>
      <WrapperTypeProductContent>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return (
              <TypeProduct
                content={content}
                onOpenChange={() => fetchAllMiniTypeProduct(item)}
                name={item}
                key={item}
              />
            );
          })}

          {/* {typeProducts.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })} */}
        </WrapperTypeProduct>
      </WrapperTypeProductContent>
      <div
        className="body"
        style={{ width: "100%", backgroundColor: "#efefef" }}
      >
        <SliderComponent
          arrImages={[slider1, slider2, slider3, slider4, slider5]}
          arrImageRight={[image1, image2, image3]}
        />
        <div
          id="container"
          style={{
            height: "auto",
            width: "1270px",
            margin: "0 auto",
            padding: 20,
          }}
        >
          <WrapperProducts>
            {products?.data?.map((product) => {
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <WrapperButtonMore
              textbutton={isPreviousData ? "Load more" : "Xem thêm"}
              type="outline"
              styleButton={{
                border: `1px solid ${
                  products?.total === products?.data?.length
                    ? "#f5f5f5"
                    : "#00adb5"
                }`,
                color: `${
                  products?.total === products?.data?.length
                    ? "#f5f5f5"
                    : "#00adb5"
                }`,
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              disabled={
                products?.total === products?.data?.length ||
                products?.totalPage === 1
              }
              styleTextButton={{
                fontWeight: 500,
                color: products?.total === products?.data?.length && "#fff",
              }}
              onClick={() => setLimit((prev) => prev + 6)}
            />
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default HomePage;
