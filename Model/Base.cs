using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Base
    {
        [Column("id")]
        public int Id;

        [Column("data_criacao")]
        public DateTime DataCriacao;

        [Column("registro_ativo")]
        public bool RegistroAtivo;

    }
}
