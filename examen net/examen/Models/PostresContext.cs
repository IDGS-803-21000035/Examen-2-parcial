using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.Threading;
using System;
using System.Collections.Generic;

namespace examen.Models
{
    public partial class PostresContext : DbContext
    {
        public PostresContext() { }

        public PostresContext(DbContextOptions<PostresContext> options) : base(options) { }

        public virtual DbSet<Postre> Postres { get; set; }
        public virtual DbSet<Categoria> Categorias { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){ }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
             modelBuilder.Entity<Postre>(entity => {
                 entity.HasKey(e => e.idPostre).HasName("PK__postre__756A540257DD6020");
                 entity.ToTable("postre");
                 entity.Property(e => e.idPostre).HasColumnName("idPostre");
                 entity.Property(e => e.nombre).HasMaxLength(50)
                     .HasColumnName("nombre");
                 entity.Property(e => e.descripcion).HasMaxLength(250)
                     .HasColumnName("descripcion");
                 entity.Property(e => e.precio).HasColumnName("precio");
                 entity.Property(e => e.idCategoria).HasColumnName("idCategoria");

                 entity.HasOne(d => d.Categoria)
                       .WithMany(p => p.Postres)
                       .HasForeignKey(d => d.idCategoria)
                       .HasConstraintName("FK__Postre__Categoria");
             });

            modelBuilder.Entity<Categoria>(entity =>
            {
                entity.HasKey(e => e.idCategoria).HasName("PK__categoria__7D439ABD");
                entity.ToTable("categoria");
                entity.Property(e => e.idCategoria).HasColumnName("idCategoria");
                entity.Property(e => e.nombreCategoria).HasMaxLength(50)
                    .HasColumnName("nombreCategoria");
            });

            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}

