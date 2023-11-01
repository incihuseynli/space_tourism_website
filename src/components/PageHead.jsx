const PageHead = ({pageNum,pageTitle}) => {
  return (
    <div
      className="
        flex items-center justify-center gap-4 text-center mt-14
        md:item-start md:justify-start md:pl-4 
        lg:mt-24 lg:absolute lg:top-16 lg:left-20 
    "
    >
      <span
        className="
           heading6 opacity-50
        "
      >
        {pageNum}
      </span>
      <span
        className="
        heading6 font-medium capitalize
      "
      >
        {pageTitle}
      </span>
    </div>
  );
};

export default PageHead;
