import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFIlters';

export function Filters() {

    const { filters, setFilters } = useFilters();
    const minPriceFilteredId = useId();
    const categoryFilteredId = useId();


    const handleChangePrice = (event: any) => {
        setFilters((prevState: any) => ({
            ...prevState,
            minPrice: parseInt(event.target.value)
        }));
    }

    const handleChangeCategory = (event: any) => {
        setFilters((prevState: any) => ({
            ...prevState,
            category: event.target.value
        }));
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilteredId}>Price</label>
                <input
                    type="range"
                    id={minPriceFilteredId}
                    min='0'
                    max='1000'
                    value={filters.minPrice}
                    onChange={handleChangePrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilteredId}>Categoría</label>
                <select id={categoryFilteredId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}