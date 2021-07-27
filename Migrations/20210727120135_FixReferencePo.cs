using Microsoft.EntityFrameworkCore.Migrations;

namespace Rhea.Migrations
{
    public partial class FixReferencePo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "References");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "References",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
