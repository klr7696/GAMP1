<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use App\Repository\LivreCompteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     collectionOperations={
 *     "get"={
 *     "normalization_context"={
 *     "groups"={"infos"}
 *     }
 *     ,"path"="/livres"}
 * ,"post"= {"path"="/livres"}
 *     }
 *     ,itemOperations={
 *     "get"={
 *     "normalization_context"={"groups"={"infos_details"}},
 *     "path"="/livres/{id}"
 *     }
 *      ,"delete"={"path"="/livres/{id}"}
 *      ,"patch"={"path"="/livres/{id}"}
 *      ,"put"={"path"="/livres/{id}"}
 * },
 *     subresourceOperations={

 *     "ligne_depenses_get_subresource"={"path"="/livres/{id}/lignes"}
 *     }
 *)
 * @UniqueEntity("anneeRef", message="cet livre existe")
 * @UniqueEntity("decretLivre",message="ce decret est utilisé pour un livre")
 *
 *
 * @ORM\Entity(repositoryClass="App\Repository\LivreCompteRepository", repositoryClass=LivreCompteRepository::class)
 */
class LivreCompte
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"infos","infos_details"})
     */
    private $id;

    /**
     * @var integer
     *@Assert\Type("integer",message="hello")
     *@Assert\Length(min= 4, max= 4, exactMessage="l'annee n'est pas bien ecrite")
     * @Assert\NotBlank(message="l'année de reference doit être fournit")
     * @Assert\Positive(message="la valeur ne peut pas être negatif")
     * @ORM\Column(type="integer")
     *
     */
    private $anneeRef;


    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"infos_details"})
     * @Assert\NotBlank(message="veuillez saisir le decret ")
     * @Assert\Length(min=3, minMessage="le nombre de caractères doit être plus grand que 3",
     *     max=100, maxMessage="le nombre de caractères doit être plus petit que 100")
     */
    private $decretLivre;

    /**
     * @ORM\Column(type="date_immutable")
     *
     * @var string A "d-m-Y" formatted value
     * @Groups({"infos_details"})
     */
    private $adoptionDate;

    /**
     * @ORM\Column(type="date_immutable")
     *@var string A "d-m-Y" formatted value
     * @Assert\GreaterThan(propertyPath="adoptionDate",message="erreur de date")
     * @Groups({"infos_details"})
     */
    private $executionDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"infos_details"})
     */
    private $descriptionLivre;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"infos_details"})
     */
    private $creationAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"infos_details"})
     */
    private $modifAt;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"infos_details"})
     */
    private $isActiver;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isNonSupprimable;

    /**
     * @ORM\OneToMany(targetEntity=LigneDepense::class, mappedBy="livreCompte", orphanRemoval=true)
     * @ApiSubresource(maxDepth=1)
     * @Groups({"infos_details","lier_livre"})
     */
    private $ligneDepenses;



    public function __construct()
    {
        $this->ligneDepenses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getDecretLivre(): ?string
    {
        return $this->decretLivre;
    }

    public function setDecretLivre(string $decretLivre): self
    {
        $this->decretLivre = $decretLivre;

        return $this;
    }

    public function getAdoptionDate(): ?\DateTimeImmutable
    {
        return $this->adoptionDate;
    }

    public function setAdoptionDate(\DateTimeImmutable $adoptionDate): self
    {
        $this->adoptionDate = $adoptionDate;

        return $this;
    }

    public function getExecutionDate(): ?\DateTimeImmutable
    {
        return $this->executionDate;
    }

    public function setExecutionDate(\DateTimeImmutable $executionDate): self
    {
        $this->executionDate = $executionDate;

        return $this;
    }

    public function getDescriptionLivre(): ?string
    {
        return $this->descriptionLivre;
    }

    public function setDescriptionLivre(?string $descriptionLivre): self
    {
        $this->descriptionLivre = $descriptionLivre;

        return $this;
    }

    public function getCreationAt(): ?\DateTimeImmutable
    {
        return $this->creationAt;
    }

    public function setCreationAt(\DateTimeImmutable $creationAt): self
    {
        $this->creationAt = $creationAt;

        return $this;
    }

    public function getModifAt(): ?\DateTimeInterface
    {
        return $this->modifAt;
    }

    public function setModifAt(?\DateTimeInterface $modifAt): self
    {
        $this->modifAt = $modifAt;

        return $this;
    }

    public function getIsActiver(): ?bool
    {
        return $this->isActiver;
    }

    public function setIsActiver(bool $isActiver): self
    {
        $this->isActiver = $isActiver;

        return $this;
    }

    public function getIsNonSupprimable(): ?bool
    {
        return $this->isNonSupprimable;
    }

    public function setIsNonSupprimable(bool $isNonSupprimable): self
    {
        $this->isNonSupprimable = $isNonSupprimable;

        return $this;
    }

    /**
     * @return Collection|LigneDepense[]
     */
    public function getLigneDepenses(): Collection
    {
        return $this->ligneDepenses;
    }

    public function addLigneDepense(LigneDepense $ligneDepense): self
    {
        if (!$this->ligneDepenses->contains($ligneDepense)) {
            $this->ligneDepenses[] = $ligneDepense;
            $ligneDepense->setLivreCompte($this);
        }

        return $this;
    }

    public function removeLigneDepense(LigneDepense $ligneDepense): self
    {
        if ($this->ligneDepenses->contains($ligneDepense)) {
            $this->ligneDepenses->removeElement($ligneDepense);
            // set the owning side to null (unless already changed)
            if ($ligneDepense->getLivreCompte() === $this) {
                $ligneDepense->setLivreCompte(null);
            }
        }

        return $this;
    }

    public function getAnneeRef(): ?int
    {
        return $this->anneeRef;
    }

    public function setAnneeRef(int $anneeRef): self
    {
        $this->anneeRef = $anneeRef;

        return $this;
    }

    /**
     * @Groups({"infos_details"})
     * @return int
     */
    public function getNombreCompte(): int
    {
        return array_reduce($this->getLigneDepenses()->toArray(),function ($nombre)
        {

            return $nombre+1;
        }, 0);
    }

    /**
     * @return int
     * @Groups({"infos_details"})
     */
    public function getCompteChapitre(): int
    {
        return array_reduce($this->getLigneDepenses()->toArray(),function ($nombre, $allo)
        {

            return $nombre + ($allo->getHierachieLigne()==="CHAPITRE"? 1:0);
        }, 0);
    }

}
