using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("hospitais")]
    public class Hospital : Base
    {
        [Column("razao_social")]
        public string RazaoSocial;
        [Column("cnpj")]
        public string Cnpj;
        [Column("faturamento")]
        public decimal Faturamento;
        [Column("particular")]
        public bool Particular;
    }
}
