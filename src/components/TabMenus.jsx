/* eslint-disable react/prop-types */

const TabMenus = ({ dest , activeKey, setActiveKey}) => {
  return (
    <div
      className="
        w-full 
        flex items-center justify-center gap-6
    "
    >
      {dest.map(({id,name}) => {
        // console.log(id);
        return (
          <button
            key={id}
            onClick={() => setActiveKey(id)}
            className={`subheading2 text-2xl pb-8 h-10 
            transition-all border-b-0 hover:border-b-4
             ${activeKey === id ? 'active' : ''}`}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default TabMenus;
