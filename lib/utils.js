export const servicesGenerator = (id) => {
  return [
    {
      id: new Date().getTime() * Math.random(),
      zoneId: id,
      name: "تعمیر  لوازم برقی ",
      description: "تعمیر انواع لوازم برقی مثل یخچال و تلوزیون",
    },
    {
      id: new Date().getTime() * Math.random(),
      zoneId: id,
      name: "نقاشی ساختمان",
      description: "خدمات رنگ و تعمیر دیوار و منزل",
    },
    {
      id: new Date().getTime() * Math.random(),
      zoneId: id,
      name: "قالیشویی",
      description:
        "شست و شوی انواع فرش و قالی با استفاده از به روز ترین ابزار و دستگاهها",
    },
    {
      id: new Date().getTime() * Math.random(),
      zoneId: id,
      name: "باغبانی",
      description: "گلهای خود را به ما بسپارید",
    },
  ];
};
