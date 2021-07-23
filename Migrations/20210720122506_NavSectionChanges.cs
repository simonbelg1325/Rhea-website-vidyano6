using Microsoft.EntityFrameworkCore.Migrations;

namespace Rhea.Migrations
{
    public partial class NavSectionChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NavSectionHeader",
                table: "NavSections",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NavSectionTitle",
                table: "NavSections",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NavSectionHeader",
                table: "NavSections");

            migrationBuilder.DropColumn(
                name: "NavSectionTitle",
                table: "NavSections");
        }
    }
}
