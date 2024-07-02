using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRequestModelaction : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Action",
                table: "Requests");

            migrationBuilder.AddColumn<int>(
                name: "ActionId",
                table: "Requests",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Action",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Action", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Requests_ActionId",
                table: "Requests",
                column: "ActionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Action_ActionId",
                table: "Requests",
                column: "ActionId",
                principalTable: "Action",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Action_ActionId",
                table: "Requests");

            migrationBuilder.DropTable(
                name: "Action");

            migrationBuilder.DropIndex(
                name: "IX_Requests_ActionId",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "ActionId",
                table: "Requests");

            migrationBuilder.AddColumn<string>(
                name: "Action",
                table: "Requests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
