using Microsoft.EntityFrameworkCore.Migrations;

namespace Rhea.Migrations
{
    public partial class addedOrderInNavSection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "NavSections",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Order",
                table: "NavSections");
        }
    }
}
