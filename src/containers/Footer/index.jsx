import React from 'react';
import { footerList } from 'imports';
import { historyPush } from 'libs';
import { CategoryList } from 'components';

export const MainFooter = () => {
  const moveToPage = path => {
    const conversionPath = path.toLowerCase().replaceAll(' ','');
    return historyPush(conversionPath);
  };

  return (
    <footer>
      <section className='footer-store-info'>
        <div>
          <img src='' alt='' className='footer-store-info-logo' />
          <p>Takeaway &amp; Delivery templatefor small - medium businesses.</p>
        </div>
        <div>
          {Object.entries(footerList).map((list, idx) => (
            <CategoryList
              key={idx}
              itemTitle={list[0]}
              itemList={list[1]}
              listType='vertical'
              onClick={moveToPage}
            />
          ))}
        </div>
      </section>
      <section className='footer-store-social'>
        <p>
          Built by <a href=''>Flowbase</a>  · Powered by <a href=''>Webflow</a>
        </p>
        <div className='footer-store-social-button'>
          <button className='insta'></button>
          <button className='twitter'></button>
          <button className='youtube'></button>
        </div>
      </section>
    </footer>
  );
};
