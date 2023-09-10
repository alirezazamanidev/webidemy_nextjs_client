
export default function separateWithComma(price: string) {
  return price?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const TypeItemInFarsi = (type: string) => {
  switch (type) {
    case "cash":
      return "نقدی";
    case "free":
      return "رایگان";
    case "vip":
      return "اعضای ویژه";
  }
};


export const TypeConditioncourseToFarsi = (condition: string) => {
  switch (condition) {
    case "presell":
      return "پیش فروش";
    case "stopـselling":
      return "توقف فروش";
    case "on_performing":
      return "در حال برگزاری";
    case "completion_of_recording":
      return "تکمیل ظبط";
    default:
      return "";
  }
};
