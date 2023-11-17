import categories from "../../data/CouponListCategories"

const Categories = () => {
  return (
    <ul className="flex flex-wrap gap-3 lg:gap-0 justify-center lg:justify-between lg:py-0 py-3">
      {
        categories?.map(({ title, id, icon, isActive }) => [
          <li key={id} className={`p-4 px-6 mr-1 rounded-t-lg bg-white flex gap-2 flex-col center border-b-2  ${isActive ? "border-primary" : "border-white"}`}>
            <img src={`/couponCategories/${icon}`} alt={title} width={36} />
            <p className="capitalize text-xs font-bold">{title}</p>
          </li>
        ])
      }
    </ul>
  )
}

export default Categories;