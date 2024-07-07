using examen.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Linq;
using System.Threading;

namespace examen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostresController : ControllerBase
    {
        //Variable de contexto de base de datos
        private readonly PostresContext _baseDatos;

        ///GENERAMOS CONSTRUCTOR
        public PostresController(PostresContext baseDatos)
        {
            this._baseDatos = baseDatos;
        }

        //METODO GT
        [HttpGet]
        [Route("Postres")]
        public async Task<IActionResult> Lista()
        {
            var postres = await _baseDatos.Postres.ToListAsync();

            return Ok(postres);
        }

        // GET: nombre
        [HttpGet]
        [Route("BuscarPorNombre")]
        public async Task<IActionResult> BuscarPorNombre(string nombre)
        {
            if (string.IsNullOrEmpty(nombre))
            {
                return BadRequest("vacia");
            }

            var postres = await _baseDatos.Postres
                .Where(p => p.nombre.Contains(nombre))
                .ToListAsync();

            if (!postres.Any())
            {
                return NotFound("No hay.");
            }

            return Ok(postres);
        }

        // GET: BuscarPorCategoria
        [HttpGet]
        [Route("BuscarPorCategoria")]
        public async Task<IActionResult> BuscarPorCategoria(int idCategoria)
        {
            if (idCategoria == 0)
            {
                return BadRequest(" vacío.");
            }

            var postres = await _baseDatos.Postres
                .Where(p => p.Categoria.idCategoria == idCategoria)
                .Select(p => new
                {
                    p.idPostre, p.nombre, p.descripcion, p.precio,
                    CategoriaNombre = p.Categoria.nombreCategoria
                })
                .ToListAsync();

            if (!postres.Any())
            {
                return NotFound("No hay");
            }

            return Ok(postres);
        }
    }

}


