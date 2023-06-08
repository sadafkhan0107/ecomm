import './Filter.css';
import { useFilter } from '../../context/FilterContext/FilterContext';
export const Filter=()=>{
// const {price, category, sortBy, rating, discount,dispatch} = useFilter();
const{dispatch} = useFilter();
  const handleDiscountChange=(e)=>{
    dispatch({
      type:"discount",
      payload: e.target.value
    })
  }
    return(
        <aside className='filter'> 
      <div className='nav-filter'>
      <div >Filter</div>
      <div >clear</div>
        </div>
        <div className='price-filter'>
          <h3>Price</h3>
          <div className='price-range'>
            <span> 1k </span>
            <span> 2k </span>
            <span> 3k </span>
            <span> 4k </span>
          </div>
          <input className='slider' type="range" min="1000" step="1000" max="4000"  />
        </div>
        <div className='category-filter'>
          <h4>Category</h4>
          <div className='filter-list'>
            <label>
              <input className='check-box' type='radio' value="all"/>
              All
            </label>
          </div>
          <div className='filter-list'>
            <label>
              <input className='check-box' type='radio' value="men"/>
              Men
            </label>
          </div>
          <div className='filter-list'>
          <label>
              <input className='check-box' type='radio' value="women"/>
              Women
            </label>
          </div>
          <div className='filter-list'>
          <label>
              <input className='check-box' type='radio' value="boys"/>
              Boys
            </label>
          </div>
          <div className='filter-list'>
          <label>
              <input className='check-box' type='radio' value="girls"/>
              Girls
            </label>
          </div>
        </div>
        <div className='sortby-filter'>
            <h3>Sort by</h3>
            <div className='filter-list low-to-high'>
            <label>
              <input className='check-box' type='radio' name="sortByPrice" value='lowToHigh'/>
              Price - Low to High
            </label>
            </div>
            <div className='filter-list high-to-low'>
            <label>
              <input className='check-box' type='radio' name='sortByPrice' value='highToLow'/>
              Price - High to Low
            </label> 
            </div>
        </div>
        <div className='rating-filter'>
            <h3>Rating</h3>
            <div className='filter-list star4'>
            <label>
              <input className='check-box' type='radio' name='rating' value="4"/>
              4 stars and above
            </label>
            </div>
            <div className='filter-list star3'>
            <label>
              <input className='check-box' type='radio'name='rating' value="3"/>
              3 stars and above
            </label>
            </div>
            <div className='filter-list star2'>
            <label>
              <input className='check-box' type='radio' name='rating' value="2"/>
              2 stars and above
            </label>
            </div>
            <div className='filter-list star1'>
            <label>
              <input className='check-box' type='radio' name='rating' value="1"/>
              1 stars and above
            </label>
            </div>
        </div>
        <div className='discount-filter'>
            <h3>Discount</h3>
            <div className=' filter-list fifty'>
            <label>
              <input className='check-box' type='radio' name='discount' value="50" onChange={handleDiscountChange}/>
              50% and above
            </label>
            </div>
            <div className='filter-list thirty'>
            <label>
              <input className='check-box' type='radio' name='discount' value="30" onChange={handleDiscountChange}/>
              30% and above
            </label>
            </div>
            <div className='filter-list twenty'>
            <label>
              <input className='check-box' type='radio' name='discount' value="20" onChange={handleDiscountChange}/>
              20% and above
            </label>
            </div>
        </div>
        <div className='additional-filter'>
            <h3>Additional Filters</h3>
            <div className='filter-list outofstock'>
            <label>
              <input className='check-box'type='checkbox'/>
              Include Out of Stock
            </label>
            </div>
            <div className='filter-list fast-delivery' >
            <label>
              <input className='check-box' type='checkbox'/>
              Fast Delivery
            </label>
            </div>
        </div>
    </aside>
    )
}
