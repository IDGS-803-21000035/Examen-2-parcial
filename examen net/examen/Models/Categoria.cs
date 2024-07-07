using Microsoft.EntityFrameworkCore;

namespace examen.Models
{
    public class Categoria
    {
        public int idCategoria { get; set; }
        public string? nombreCategoria { get; set; }
        public virtual ICollection<Postre> Postres { get; set; }

        public Categoria()
        {
            Postres = new HashSet<Postre>();
        }
    }
}

