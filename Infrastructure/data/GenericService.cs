using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.data
{
    public class GenericService<T, DTO> where T : BaseEntity where DTO : class
    {
    //     private readonly IGenericRepository<Entity> _entityRepo;
    //     private readonly IMapper _mapper;
    //     public GenericService(GenericRepository<Entity> entityRepo, IMapper mapper)
    //     {
    //         _mapper = mapper;
    //         _entityRepo = entityRepo;
    //     }
    //     public DTO CreateModel(DTO dto)
    //     {
    //         // Traitements metiers.
            
    //         var entity = _mapper.Map<DTO>(_entityRepo.Create(_mapper.Map<Entity>(dto)));
    //         return entity;
    //     }
     }
}