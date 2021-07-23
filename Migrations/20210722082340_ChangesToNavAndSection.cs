using Microsoft.EntityFrameworkCore.Migrations;

namespace Rhea.Migrations
{
    public partial class ChangesToNavAndSection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SectionHeader",
                table: "Sections");

            migrationBuilder.DropColumn(
                name: "SectionTitle",
                table: "Sections");

            migrationBuilder.DropColumn(
                name: "SectionVideoUrl",
                table: "Sections");

            migrationBuilder.AddColumn<string>(
                name: "NavSectionVideo",
                table: "NavSections",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NavSectionVideo",
                table: "NavSections");

            migrationBuilder.AddColumn<string>(
                name: "SectionHeader",
                table: "Sections",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SectionTitle",
                table: "Sections",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SectionVideoUrl",
                table: "Sections",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
