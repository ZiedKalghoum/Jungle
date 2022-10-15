using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.data {
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity {
        private readonly StoreContext _context;

        public GenericRepository (StoreContext storeContext) {
            _context = storeContext;

        }
        // public T Create (T entity) {

        //     var entityEntry = _storeContext.Set<T> ().Add (entity);
        //     _storeContext.SaveChanges ();
        //     return entityEntry.Entity;
        // }
        // public async Task<T> GetById (int id) {
        //     return await  _storeContext.Set<T> ().FindAsync (id);
        // }

        public async Task<T> GetByIdAsync (int id) {
            return await _context.Set<T> ().FindAsync (id);
        }


        public async Task<IReadOnlyList<T>> ListAllAsync () {
            return await _context.Set<T> ().ToListAsync ();
        }

        public async Task<IReadOnlyList<T>> ListAsync (ISpecification<T> spec) {
            return await ApplySpecification (spec).ToListAsync ();
        }
        
        public async Task<T> GetEntityWithSpec (ISpecification<T> spec) {
            return await ApplySpecification (spec).FirstOrDefaultAsync ();
        }
        public async Task<int> CountAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).CountAsync();
        }
        private IQueryable<T> ApplySpecification (ISpecification<T> spec) {
            return SpecificationEvaluator<T>.GetQuery (_context.Set<T> ().AsQueryable (), spec);
        }

        

        //  public async Task<IReadOnlyList<T>> GetProductsAsync (params Expression<Func<T, object>>[] includes) {
        //     var entities =   _storeContext.Set<T>().AsQueryable();
        //     foreach(var include in includes){
        //         entities.Include(includes);
        //     }
        // }
    }
}