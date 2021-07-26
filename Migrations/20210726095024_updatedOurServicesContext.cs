using Microsoft.EntityFrameworkCore.Migrations;

namespace Rhea.Migrations
{
    public partial class updatedOurServicesContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Header",
                table: "OurServices");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Header",
                table: "OurServices",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
