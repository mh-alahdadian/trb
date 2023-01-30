import React from "react";
import styles from "./sellerCard.module.scss";
import Button from "../../general/Button/Button";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export interface Seller {
  name1: string;
  name2: string;
  shop_name: string;
  shop_name2: string;
  shop_id: number;
  prk: string;
  problem_report_type: string;
  page_url: string;
  is_filtered_by_city: boolean;
  is_filtered_by_official_shop: boolean;
  shop_score_percentile: number;
  shop_votes_count: number;
  button_text: string;
  price: number;
  price_text: string;
  price_text_striked: string;
  price_text_mode: string;
  is_price_unreliable: boolean;
  price_string: string;
  badges: string[];
  shop_score: number;
  show_report_button: boolean;
  more_info: MoreInfo;
  score_info: ScoreInfo;
  is_adv: boolean;
  last_price_change_date: string;
  show_purchase_warning: boolean;
}

export interface MoreInfo {
  payment_on_delivery: null;
  free_shipping: null;
  same_day_delivery: string;
  shipping_types: string[];
  heavy_items: null;
  same_day_free_shipping: null;
}

export interface ScoreInfo {
  score: number;
  score_text: string;
  score_color: string;
  score_background_color: string;
  complaints_info: ComplaintsInfo;
}

export interface ComplaintsInfo {
  title: string;
  summary: string[];
}

const ScoreButton = styled.div<ScoreInfo>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border-radius: 16px;
  height: 28px;
  padding: 4px;
  width: 166px;
  color: ${(props) => props.score_color};
  background: ${(props) => props.score_background_color};
`;

const ScoreDetails = styled.div<ScoreInfo>`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  padding: 12px;
  background: ${(props) => props.score_background_color};

  & > p:nth-child(1) {
    font-weight: bold;
    line-height: 24px;
  }
  & > p:nth-child(2) {
    font-weight: normal;
    font-size: 12px;
    color: #333;
    line-height: 24px;
    margin-top: 4px;
  }
`;

function SellerCard(seller: Seller) {
  // Actully I hate using UNDERLINE in names (snake-case); I always use camelCase.
  // And here, I didn't change the names JUST because the API returns snake-case names.
  // and If I change the names, I have to pass the props manually and the props can't be passed
  // using the spread operator like <SellerCard {...obj} />

  const [isScoreExpanded, setIsScoreExpanded] = useState(false);

  function toggleScoreSection() {
    setIsScoreExpanded((s) => !s);
  }

  const { shop_name, shop_name2, name1, name2, price_text, page_url } = seller;
  return (
    <div className={styles.SellerCard}>
      <div className={styles.shop_name1}>{shop_name}</div>
      <span className={styles.shop_name2}>{shop_name2}</span>
      <ScoreButton {...seller.score_info} onClick={toggleScoreSection}>
        {isScoreExpanded ? null : seller.score_info.score_text}
        <Image src="/static/images/drop_down.svg" width={16} height={16} />
      </ScoreButton>
      {isScoreExpanded ? (
        <ScoreDetails {...seller.score_info}>
          <p>{seller.score_info.complaints_info.title}</p>
          <p style={{ whiteSpace: "pre-line" }}>
            {seller.score_info.complaints_info.summary.join("\n")}
          </p>
          <div style={{ marginTop: "8px" }}>
            <Button
              outlined
              title={"پروفایل فروشگاه"}
              href={`shop/${seller.shop_id}/${seller.shop_name}/`}
              style={{ marginLeft: "8px" }}
            />
            <Button
              outlined
              title={"شیوه ارزیابی فروشگاه"}
              href="/landings/shop-score"
            />
          </div>
        </ScoreDetails>
      ) : null}
      <div className={styles.name1}>{name1}</div>
      <div className={styles.name2}>{name2}</div>
      <div className={styles.lastRow}>
        <div className={styles.price}>{price_text}</div>
        <Button outlined href={page_url} title={"خرید"} />
      </div>
    </div>
  );
}

export default SellerCard;

SellerCard.propTypes = {
  shop_name: PropTypes.string,
  shop_name2: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  price_text: PropTypes.string,
  page_url: PropTypes.string,
};
