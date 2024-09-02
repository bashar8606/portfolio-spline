import Image from "next/image";
import style from "./SpecCard.module.scss";

const SpecCard = ({ data }) => {
  return (
    <div className={`${style.card} `}>
      <div className={style.card_img}>
        <div className="ratio ratio-1x1">
          <Image src={data?.img} fill alt="" className="object-fit-contain" />
        </div>
      </div>
      <div className={style.card_body}>
        <h3 className={`fw-400 text-white ${style.title}`}>{data?.title}</h3>
        <p className="title-md text-white opacity-50">{data?.description}</p>
      </div>
      <div className={`${style.card_footer}`}>
        {data?.tags?.map((item, i)=>{
            return(
                <div key={i}
                className={`d-inline-flex align-items-center ps-2 pe-3 py-1 rounded-pill border me-2 mb-2   ${style.tag}`}
              >
                <div className={`ratio ratio-1x1 ${style.icon}`}>
                  <Image src={item?.img} fill alt="" className="object-fit-contain" />
                </div>
                <p className="mb-0 title-sm ps-2 text-white">{item?.title}</p>
              </div>  
            )
        })}
       
      </div>
    </div>
  );
};

export default SpecCard;
