using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;

namespace API{

public class MappingProfiles : Profile {
    public MappingProfiles () {
            // Add as many of these lines as you need to map your objects
            CreateMap<Product, ProductToReturnDto>()
            .ForMember(d => d.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
            .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name))
            .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>());
    }
}
}