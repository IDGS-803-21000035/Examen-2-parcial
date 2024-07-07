using examen.Models;

namespace examen.Models
{
    public class Postre
    {
        public int idPostre { get; set; }
        public string? nombre { get; set; }
        public string? descripcion { get; set; }
        public double precio { get; set; }
        public int idCategoria { get; set; }
        public virtual Categoria Categoria { get; set; }
    }
}